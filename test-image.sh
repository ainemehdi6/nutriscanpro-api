#!/bin/bash

# Step 1: Login to get a token
echo "Step 1: Login and get token"
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "imagetest",
    "password": "Password123!"
  }')

echo "Login Response:"
echo $LOGIN_RESPONSE

# Extract the token 
ACCESS_TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

echo "Token (first 20 chars): ${ACCESS_TOKEN:0:20}"

# Test dummy image
DUMMY_BASE64="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="

echo "Step 2: Testing analyze endpoint"
curl -s -X POST http://localhost:5000/api/image-recognition/analyze \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -d "{\"base64Image\": \"$DUMMY_BASE64\"}"
