<h1>Greeting Page</h1>

<details close="close">
<summary><b>GET</b> /private/api/user/query</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 isaac
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---
</details>

<details close="close">
<summary><b>GET</b> /private/api/settings/status</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 {
   "wan_macaddress": "dc:a6:32:bc:e0:c7",
   "wan_ip": "192.168.1.2",
   "wan_netmask": "255.255.255.0",
   "wan_gateway": "192.168.1.1",
   "wlan_macaddress": "dc:a6:32:bc:e0:c8",
   "wlan_ip": "10.100.100.1",
   "wlan_netmask": "255.255.255.0",
   "wlan_dns": "8.8.8.8 1.1.1.1 ",
   "wlan_ssid": "Sala",
   "wlan_hw_mode": "g",
   "wlan_channel": 6,
   "wlan_hw_n_mode": true,
   "wlan_qos": true
 }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---

</details>

<details close="close">
<summary><b>POST</b> /private/api/user/login</summary>

 ---
 
 Body
 ```json
 {
    "username": "alarm",
    "password": "alarm"
 }
 ```

 Response 200 
 ```json
 jsonwebtoken_key_response
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | wrong_username_or_password |

 ---

</details>