#!/bin/bash

# This script tests the image recognition endpoints

echo "Step 1: Register a test user and get a JWT token"
USER_DATA=$(curl -s -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "imagetest",
    "email": "imagetest@example.com",
    "password": "Password123!"
  }')

echo "User Registration Response:"
echo $USER_DATA

# Extract the JWT token from the response
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "imagetest",
    "password": "Password123!"
  }')

echo "Login Response:"
echo $LOGIN_RESPONSE

# Extract the token field from the login response
TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

echo "Retrieved Token: ${TOKEN:0:20}..."

# To test the image recognition, you would need a base64 encoded image
# For this example, we'll use a placeholder. In a real application, 
# you would use an actual food image converted to base64.
# 
# To encode a real image to base64:
# base64 -w 0 food_image.jpg > food_image_b64.txt
#
# Then read that file and use its content as BASE64_IMAGE
#
# For this test we'll use a very small dummy base64 image
BASE64_IMAGE="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="

echo "Step 2: Test the analyze endpoint with a dummy image"
ANALYZE_RESPONSE=$(curl -s -X POST http://localhost:5000/api/image-recognition/analyze \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "{
    \"base64Image\": \"$BASE64_IMAGE\"
  }")

echo "Analyze Response:"
echo $ANALYZE_RESPONSE

echo "Step 3: Test the analyze-and-save endpoint"
ANALYZE_SAVE_RESPONSE=$(curl -s -X POST http://localhost:5000/api/image-recognition/analyze-and-save \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "{
    \"base64Image\": \"$BASE64_IMAGE\",
    \"servingUnit\": \"g\",
    \"servingSize\": 100
  }")

echo "Analyze and Save Response:"
echo $ANALYZE_SAVE_RESPONSE

echo "Testing complete!"