<h1>Settings Time</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/time/status</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "ntp_status": true,
   "timezone": "Asia/Phnom_Penh",
   "time": "18:09:09",
   "date": "2021-46-13"
 }
 ```

 Response 200 
 ```json
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/time/timedate</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "time": "18:17:16",
   "date": "2012-10-30"
 }
 ```

 Response 200 
 ```json
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |
 |     500      | actual_error_goes_here     |

 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/time/timezone</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "time": "18:17:16",
   "date": "2012-10-30"
 }
 ```

 Response 200 
 ```json
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |
 |     500      | actual_error_goes_here     |

 - Note: timezone must be a valid timezone from website https://en.wikipedia.org/wiki/List_of_tz_database_time_zones;

 ---
</details>