# API Specification - CurlingDrawWeightPractice

This document outlines the API architecture and specifications for the CurlingDrawWeightPractice application. The API is designed following RESTful principles and organized into microservices as outlined in the project plan.

## 1. API Architecture Overview

### 1.1 Microservices Architecture

The API is structured around the following microservices:

1. **User Service** - Authentication, user profiles, preferences
2. **Training Service** - Practice sessions, shot recording, training programs
3. **Metrics Service** - Performance tracking, statistics, analysis
4. **Notification Service** - Push notifications, reminders, alerts
5. **Analytics Service** - Usage patterns, performance insights
6. **Content Service** - Educational content, translations, configuration

### 1.2 API Gateway

All client requests pass through an API Gateway which:
- Routes requests to appropriate microservices
- Handles authentication and authorization
- Implements rate limiting
- Provides logging and monitoring
- Manages API versions

### 1.3 Communication Patterns

- **Synchronous Communications**: REST APIs for direct client requests
- **Asynchronous Communications**: Message queues for background operations
- **Service-to-Service Communication**: Internal REST APIs with authentication

## 2. API Standards

### 2.1 Request/Response Format

All APIs use JSON for request and response bodies:

**Request Headers:**
```
Accept: application/json
Content-Type: application/json
Authorization: Bearer {token}
Accept-Language: en-US
```

**Success Response Format:**
```json
{
  "data": {
    // Resource data
  },
  "meta": {
    "timestamp": "ISO DateTime",
    "version": "string"
  }
}
```

**Error Response Format:**
```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": [
      // Optional additional error details
    ]
  },
  "meta": {
    "timestamp": "ISO DateTime",
    "requestId": "string"
  }
}
```

### 2.2 HTTP Status Codes

- `200 OK` - Successful request
- `201 Created` - Resource created
- `204 No Content` - Successful request with no response body
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Authenticated but not authorized
- `404 Not Found` - Resource not found
- `409 Conflict` - Request conflicts with current state
- `422 Unprocessable Entity` - Validation errors
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error
- `503 Service Unavailable` - Service temporarily unavailable

### 2.3 Versioning

API versioning is managed through URL paths:

```
https://api.curlingdrawweightpractice.com/v1/users
```

Major version changes may break backward compatibility, while minor versions maintain compatibility.

### 2.4 Pagination

List endpoints support pagination using the following query parameters:

- `page`: Page number (1-based)
- `limit`: Items per page (default 20, max 100)
- `sort`: Field to sort by
- `order`: Sort order (asc/desc)

**Example Response with Pagination:**
```json
{
  "data": [
    // Resource items
  ],
  "meta": {
    "pagination": {
      "total": 50,
      "page": 2,
      "limit": 10,
      "pages": 5
    }
  }
}
```

### 2.5 Filtering

List endpoints support filtering using query parameters:

```
GET /api/v1/shotResults?shotTypeId=VK&minAccuracy=70
```

### 2.6 Authentication

Authentication uses JSON Web Tokens (JWT):

1. Client authenticates via Firebase Authentication
2. Client receives JWT
3. JWT is included in all API requests in the Authorization header
4. API Gateway validates the token before forwarding requests

## 3. API Endpoints by Microservice

### 3.1 User Service

#### Authentication

Firebase Authentication is used for user management, providing endpoints for:
- Sign up
- Sign in
- Password reset
- Email verification
- Social login

#### User Profile

**Get Current User Profile**
```
GET /api/v1/users/me
```

**Response:**
```json
{
  "data": {
    "userId": "string",
    "email": "string",
    "displayName": "string",
    "createdAt": "string",
    "preferences": {
      "language": "string",
      "theme": "string",
      "notifications": true
    }
  }
}
```

**Update User Profile**
```
PATCH /api/v1/users/me
```

**Request:**
```json
{
  "displayName": "string",
  "preferences": {
    "language": "string",
    "theme": "string",
    "notifications": true
  }
}
```

**Get User Statistics Summary**
```
GET /api/v1/users/me/statistics/summary
```

**Response:**
```json
{
  "data": {
    "totalPracticeSessions": 45,
    "totalShots": 450,
    "averageAccuracy": 75.5,
    "lastPracticeDate": "2025-04-25T14:30:00Z",
    "bestShotType": "T",
    "bestShotTypeAccuracy": 90.2
  }
}
```

### 3.2 Training Service

#### Shot Types

**List Shot Types**
```
GET /api/v1/shotTypes
```

**Response:**
```json
{
  "data": [
    {
      "shotTypeId": "VK",
      "name": "Left side long guard",
      "description": "1 meter from Hog Line, left of center line",
      "targetPosition": {
        "x": -150,
        "y": 100
      },
      "rotation": "VP",
      "rotationPairing": null,
      "difficulty": 3
    },
    // Additional shot types
  ]
}
```

**Get Shot Type Detail**
```
GET /api/v1/shotTypes/{shotTypeId}
```

#### Practice Sessions

**List User's Practice Sessions**
```
GET /api/v1/practiceSessions
```

**Create New Practice Session**
```
POST /api/v1/practiceSessions
```

**Request:**
```json
{
  "sessionType": "standard",
  "selectedShotTypes": ["VK", "VL", "VT", "OK", "OL", "OT", "PV", "ES", "T", "TS"],
  "notes": "Morning practice"
}
```

**Response:**
```json
{
  "data": {
    "sessionId": "string",
    "userId": "string",
    "startTime": "string",
    "centerLineRotationType": "T_PV_MP",
    "isCompleted": false,
    "shotCount": 10,
    "completedShotCount": 0,
    "notes": "Morning practice"
  }
}
```

**Get Practice Session Detail**
```
GET /api/v1/practiceSessions/{sessionId}
```

**Update Practice Session**
```
PATCH /api/v1/practiceSessions/{sessionId}
```

**Request:**
```json
{
  "notes": "Updated notes",
  "isCompleted": true,
  "endTime": "2025-04-30T15:30:00Z"
}
```

**Delete Practice Session**
```
DELETE /api/v1/practiceSessions/{sessionId}
```

#### Shot Results

**List Shot Results for Session**
```
GET /api/v1/practiceSessions/{sessionId}/shots
```

**Record New Shot Result**
```
POST /api/v1/practiceSessions/{sessionId}/shots
```

**Request:**
```json
{
  "shotTypeId": "VK",
  "sequenceNumber": 1,
  "distanceCm": 120,
  "directionDegrees": 45,
  "notes": "Good weight, slightly off line"
}
```

**Response:**
```json
{
  "data": {
    "shotResultId": "string",
    "sessionId": "string",
    "shotTypeId": "VK",
    "sequenceNumber": 1,
    "distanceCm": 120,
    "directionDegrees": 45,
    "rotation": "VP",
    "accuracy": 78.5,
    "timestamp": "2025-04-30T14:35:00Z",
    "notes": "Good weight, slightly off line"
  }
}
```

**Get Shot Result Detail**
```
GET /api/v1/shotResults/{shotResultId}
```

**Update Shot Result**
```
PATCH /api/v1/shotResults/{shotResultId}
```

**Request:**
```json
{
  "distanceCm": 125,
  "directionDegrees": 48,
  "notes": "Updated measurement"
}
```

### 3.3 Metrics Service

#### Performance Statistics

**Get User Statistics by Time Period**
```
GET /api/v1/statistics?timeFrame=lastMonth
```

**Response:**
```json
{
  "data": {
    "timeFrame": "lastMonth",
    "calculatedAt": "2025-04-30T14:00:00Z",
    "overallStats": {
      "totalShots": 120,
      "averageAccuracy": 75.8,
      "bestShotType": "T",
      "worstShotType": "OL",
      "sessionsCompleted": 12
    },
    "shotTypeData": {
      "VK": {
        "count": 12,
        "averageAccuracy": 78.5,
        "bestResult": 92.0,
        "worstResult": 65.3,
        "trend": 2.5
      },
      // Additional shot types
    },
    "rotationData": {
      "MP": {
        "count": 60,
        "averageAccuracy": 74.2
      },
      "VP": {
        "count": 60,
        "averageAccuracy": 77.4
      }
    }
  }
}
```

**Get Shot Type Performance**
```
GET /api/v1/statistics/shotTypes/{shotTypeId}
```

**Get Performance Trend**
```
GET /api/v1/statistics/trends?period=weekly&months=3
```

**Response:**
```json
{
  "data": {
    "period": "weekly",
    "timeSeries": [
      {
        "startDate": "2025-03-01",
        "endDate": "2025-03-07",
        "averageAccuracy": 72.5,
        "sessionsCount": 3,
        "shotsCount": 30
      },
      // Additional time periods
    ],
    "shotTypeTrends": {
      "VK": [70.2, 72.1, 73.8, 75.2, 74.9, 76.0, 77.5],
      // Additional shot types
    }
  }
}
```

### 3.4 Notification Service

#### Notification Preferences

**Get Notification Preferences**
```
GET /api/v1/notifications/preferences
```

**Update Notification Preferences**
```
PATCH /api/v1/notifications/preferences
```

**Request:**
```json
{
  "practiceReminders": true,
  "improvementAlerts": true,
  "weeklyReports": true,
  "pushNotifications": true,
  "emailNotifications": false
}
```

#### Device Registration

**Register Device for Push Notifications**
```
POST /api/v1/notifications/devices
```

**Request:**
```json
{
  "deviceToken": "string",
  "platform": "iOS",
  "model": "iPhone 13",
  "timezone": "Europe/Helsinki"
}
```

### 3.5 Analytics Service

#### Usage Analytics

**Get User Activity Summary**
```
GET /api/v1/analytics/activity
```

**Response:**
```json
{
  "data": {
    "lastMonth": {
      "activeDays": 12,
      "totalPracticeTime": 360,
      "averageSessionLength": 30,
      "dayOfWeekDistribution": [5, 4, 2, 3, 8, 6, 2],
      "timeOfDayDistribution": {
        "morning": 12,
        "afternoon": 8,
        "evening": 10
      }
    }
  }
}
```

#### Performance Insights

**Get Performance Insights**
```
GET /api/v1/analytics/insights
```

**Response:**
```json
{
  "data": {
    "strengths": [
      {
        "shotTypeId": "T",
        "accuracy": 92.5,
        "description": "Button draws are your strongest shot"
      }
    ],
    "weaknesses": [
      {
        "shotTypeId": "OL",
        "accuracy": 65.2,
        "description": "Right side short guards need improvement"
      }
    ],
    "recommendations": [
      {
        "focusArea": "Right side guards",
        "reason": "15% lower accuracy than left side guards",
        "suggestion": "Focus on right side guard practice"
      }
    ]
  }
}
```

### 3.6 Content Service

#### Translations

**Get Translations**
```
GET /api/v1/translations/{languageCode}?category=ui
```

**Response:**
```json
{
  "data": {
    "languageCode": "fi",
    "category": "ui",
    "items": {
      "start_practice": "Aloita harjoitus",
      "shot_history": "HeittÃ¶historia",
      "settings": "Asetukset",
      "accuracy": "Tarkkuus"
      // Additional translations
    }
  }
}
```

#### Application Settings

**Get Public Settings**
```
GET /api/v1/settings/public
```

**Response:**
```json
{
  "data": {
    "accuracyCalculation": {
      "distanceWeight": 0.7,
      "directionWeight": 0.3,
      "perfectDistance": 0,
      "worstDistance": 200
    },
    "rotationRules": {
      "centerLinePairs": ["T_PV", "ES_TS"],
      "enforceStrictRotation": true
    }
  }
}
```

## 4. Webhook Endpoints

### 4.1 External Integrations

**Webhook Subscription**
```
POST /api/v1/webhooks/subscribe
```

**Request:**
```json
{
  "url": "https://example.com/webhook",
  "events": ["session.completed", "milestone.reached"],
  "secret": "string"
}
```

**Response:**
```json
{
  "data": {
    "subscriptionId": "string",
    "url": "https://example.com/webhook",
    "events": ["session.completed", "milestone.reached"],
    "createdAt": "2025-04-30T14:00:00Z"
  }
}
```

## 5. Batch Operations

### 5.1 Batch Shot Results

**Record Multiple Shot Results**
```
POST /api/v1/practiceSessions/{sessionId}/shots/batch
```

**Request:**
```json
{
  "shots": [
    {
      "shotTypeId": "VK",
      "sequenceNumber": 1,
      "distanceCm": 120,
      "directionDegrees": 45
    },
    {
      "shotTypeId": "VL",
      "sequenceNumber": 2,
      "distanceCm": 80,
      "directionDegrees": 30
    }
  ]
}
```

## 6. Real-time APIs

### 6.1 Active Session Updates

For real-time updates during active practice sessions, the application uses Firebase Realtime Database. The client subscribes to updates for the current session:

```javascript
const sessionRef = firebase.database().ref(`sessions/${sessionId}`);
sessionRef.on('value', (snapshot) => {
  const sessionData = snapshot.val();
  // Update UI with real-time session data
});
```

This provides immediate updates as shots are recorded and statistics are calculated.

## 7. Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| AUTH_001 | Authentication required | 401 |
| AUTH_002 | Invalid token | 401 |
| AUTH_003 | Token expired | 401 |
| AUTH_004 | Insufficient permissions | 403 |
| VAL_001 | Validation error | 422 |
| VAL_002 | Invalid shot type | 400 |
| VAL_003 | Invalid measurement range | 400 |
| RES_001 | Resource not found | 404 |
| RES_002 | Resource already exists | 409 |
| SRV_001 | Server error | 500 |

## 8. API Versioning and Deprecation Policy

### 8.1 Version Lifecycle

1. **Current Version**: Fully supported
2. **Previous Version**: Supported with limited updates
3. **Deprecated Version**: No updates, scheduled for removal
4. **Sunset Version**: No longer accessible

### 8.2 Deprecation Timeline

- APIs are deprecated with at least 6 months' notice
- Deprecated endpoints return a warning header:
  ```
  X-API-Warning: This endpoint is deprecated and will be removed on YYYY-MM-DD
  ```
- API documentation clearly marks deprecated endpoints

## 9. API Security Measures

### 9.1 JWT Token Security

- Short-lived access tokens (1 hour expiry)
- Longer-lived refresh tokens (2 weeks)
- Tokens stored securely using platform-specific secure storage
- Token rotation on suspicious activity

### 9.2 Rate Limiting

- 100 requests per minute per user for standard operations
- 30 requests per minute for write operations
- Custom limits for batch operations

### 9.3 Data Protection

- All API traffic uses HTTPS
- Sensitive data is encrypted in transit and at rest
- No sensitive data in URLs or query parameters
- PII is minimized in responses

## 10. API Monitoring and Performance

### 10.1 Performance Targets

- 95% of requests complete within 200ms
- 99% of requests complete within 500ms
- API availability target: 99.95%

### 10.2 Monitoring Metrics

- Request count by endpoint
- Response time distribution
- Error rate by endpoint
- Authentication failures
- Rate limit hits

## 11. Development and Testing

### 11.1 Development Environments

- **Development**: For internal development and testing
  - URL: `https://dev-api.curlingdrawweightpractice.com`
- **Staging**: For pre-production testing
  - URL: `https://staging-api.curlingdrawweightpractice.com`
- **Production**: Live environment
  - URL: `https://api.curlingdrawweightpractice.com`

### 11.2 API Testing

- Postman collections available for all endpoints
- OpenAPI/Swagger documentation available
- Integration tests for all endpoints
- Performance tests for critical endpoints

## 12. Offline Mode Support

The API is designed to support offline operation through:

1. Client-side data caching using IndexedDB
2. Offline shot recording with background synchronization
3. Conflict resolution for offline-created data
4. Progressive loading of non-critical data

When the device is offline, the API client library:
1. Stores requests in a queue
2. Applies optimistic updates to the UI
3. Syncs data when connectivity is restored
4. Handles conflicts using last-write-wins for simple cases and manual resolution for complex cases

## 13. Future API Enhancements

### 13.1 Planned Enhancements

- **GraphQL API**: For more efficient data fetching
- **WebSocket Support**: For real-time collaboration
- **API Composition**: For client-specific data views
- **Machine Learning Integration**: For shot recommendation and analysis
- **Team Functionality API**: For team practice and collaboration
- **Video Analysis API**: For technique analysis

---

This API specification provides a comprehensive guide for implementing the backend services required by the CurlingDrawWeightPractice application. The specification will evolve as development progresses and additional requirements emerge.