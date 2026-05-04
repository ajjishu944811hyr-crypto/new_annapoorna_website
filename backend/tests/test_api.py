import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://budget-feast-5.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
def test_root_ok(client):
    r = client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# --- Reservations ---
def test_create_reservation_success(client):
    payload = {
        "name": "TEST_User",
        "phone": "+919999999999",
        "email": "test_user@example.com",
        "date": "2026-02-15",
        "time": "19:30",
        "guests": 4,
        "notes": "TEST anniversary",
    }
    r = client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == "TEST_User"
    assert data["guests"] == 4
    assert "id" in data and isinstance(data["id"], str)
    assert "_id" not in data
    assert "created_at" in data


def test_create_reservation_missing_required(client):
    r = client.post(f"{BASE_URL}/api/reservations", json={"name": "x"})
    assert r.status_code == 422


def test_create_reservation_invalid_email(client):
    payload = {
        "name": "TEST_BadEmail", "phone": "+911234567890",
        "email": "not-an-email", "date": "2026-02-15",
        "time": "19:30", "guests": 2,
    }
    r = client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code == 422


def test_create_reservation_guests_out_of_range(client):
    payload = {
        "name": "TEST_TooMany", "phone": "+911234567890",
        "date": "2026-02-15", "time": "19:30", "guests": 25,
    }
    r = client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code == 422

    payload["guests"] = 0
    r = client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code == 422


def test_list_reservations_persistence(client):
    payload = {
        "name": "TEST_ListUser", "phone": "+911111111111",
        "date": "2026-03-01", "time": "20:00", "guests": 2,
    }
    cr = client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert cr.status_code == 200
    created_id = cr.json()["id"]

    r = client.get(f"{BASE_URL}/api/reservations")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    # No _id leakage
    for it in items:
        assert "_id" not in it
        assert "created_at" in it
    ids = [i["id"] for i in items]
    assert created_id in ids


# --- Contact ---
def test_create_contact_success(client):
    payload = {
        "name": "TEST_Contact",
        "email": "test_contact@example.com",
        "message": "Hello this is a test message",
    }
    r = client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["email"] == "test_contact@example.com"
    assert "id" in data
    assert "_id" not in data


def test_create_contact_invalid_email(client):
    payload = {"name": "TEST_Bad", "email": "bad", "message": "hello world"}
    r = client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 422


def test_list_contact(client):
    r = client.get(f"{BASE_URL}/api/contact")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    for it in items:
        assert "_id" not in it
