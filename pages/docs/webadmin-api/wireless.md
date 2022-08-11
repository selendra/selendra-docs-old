<h1>Wireless Page</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/hostapd/status</summary>

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
   "ssid": "Sala",
   "hide_ssid": false,
   "hw_mode": "g",
   "channel": 6,
   "wpa": 2,
   "passphrase": "Koompi-Onelab",
   "hw_n_mode": true,
   "qos": true
 }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 - Note: `WPA` can only be 1 or 2; `Channel` can only range from 1 to 14
 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/status</summary>

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
  "ssid": "Sala",
  "hide_ssid": false,
  "hw_mode": "g",
  "channel": 11,
  "wpa": 2,
  "passphrase": "Koompi-Onelab",
  "hw_n_mode": true,
  "qos": true
 }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |
 |     500      | actual_error_goes_here     |

 ---

</details>
