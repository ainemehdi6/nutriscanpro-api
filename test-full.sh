#!/bin/bash

# Step 1: Register a new user
echo "Step 1: Registering a new user"
REGISTER_RESP=$(curl -s -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "fooduser",
    "email": "food@example.com",
    "password": "FoodPass123!"
  }')

echo "Registration Response:"
echo $REGISTER_RESP

# Step 2: Login with the new user
echo "Step 2: Login with new user"
LOGIN_RESP=$(curl -s -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "fooduser",
    "password": "FoodPass123!"
  }')

echo "Login Response:"
echo $LOGIN_RESP

# Extract the token
ACCESS_TOKEN=$(echo $LOGIN_RESP | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

echo "Token (first 20 chars): ${ACCESS_TOKEN:0:20}"

# Test dummy image
DUMMY_BASE64="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="

# Step 3: Test image analyze endpoint
echo "Step 3: Testing analyze endpoint"
ANALYZE_RESP=$(curl -s -X POST http://localhost:5000/api/image-recognition/analyze \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -d "{\"base64Image\": \"$DUMMY_BASE64\"}")

echo "Analyze Response:"
echo $ANALYZE_RESP

# Step 4: Test analyze-and-save endpoint
echo "Step 4: Testing analyze-and-save endpoint"
SAVE_RESP=$(curl -s -X POST http://localhost:5000/api/image-recognition/analyze-and-save \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -d "{
    \"base64Image\": \"$DUMMY_BASE64\",
    \"servingUnit\": \"g\",
    \"servingSize\": 100
  }")

echo "Analyze and Save Response:"
echo $SAVE_RESP

# Step 5: Verify saved food by getting all foods
echo "Step 5: Verify saved food by listing all foods"
FOODS_RESP=$(curl -s -X GET http://localhost:5000/api/foods \
  -H "Authorization: Bearer $ACCESS_TOKEN")

echo "Foods List Response:"
echo $FOODS_RESP
