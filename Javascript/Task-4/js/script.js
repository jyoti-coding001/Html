
const data = {
  "user": {
    "id": 10245,
    "name": "Devende Kumar",
    "profile": {
      "age": 30,
      "email": "devender@example.com",
      "address": {
        "home": {
          "city": "Delhi",
          "pincode": 110001,
          "coordinates": {
            "lat": 28.6139,
            "lng": 77.2090
          }
        },
        "office": {
          "city": "Noida",
          'pincode': 201301 
   
	
		}
      },
      "preferences": {
        "languages": ["Hindi", "English"],
        "notifications": {
          "email": true,
          "sms": false,
          "push": {
            "enabled": true,
            "frequency" : "daily"
          }
        }
      }
    },
    "orders": [
      {
        "orderId": "ORD001",
        "amount": 2500,
        "items": [
          {
            "productId": "P100",
            "name": "Laptop",
            "price": 2000
          },
          {
            "productId": "P200",
            "name": "Mouse",
            "price": 500
          }
        ],
        "status": "delivered"
      },
      {
        "orderId": "ORD002",
        "amount": 1200,
        "items": [
          {
            "productId": "P300",
            "name": "Keyboard",
            "price": 1200
          }
        ],
        "status": "processing"
      }
    ]
  },
  "meta": {
    "requestId": "REQ789456",
    "timestamp": "2026-04-10T12:00:00Z",
    "flags": {
      "isTest": true,
      "version": 'v2.1'
	
    }
  }
}

 console.log(data);
 console.log(data.user);
 console.log(data.user.profile);
 console.log(data.user.profile.address);
 console.log(data.user.profile.address.home.coordinates.lat);
 console.log(data.user.orders[0].items[1].name);
 console.log(data.user.profile.preferences.notifications.push.frequency);
 console.log(data.user.orders[1].items[0].productId);
 console.log(data.meta.flags.version);