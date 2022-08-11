<h1>FTP Page</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/ftp</summary>

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
   "active": true,
   "try_attempt": 3,
   "attempt_interval": 300,
   "status": "Is Working now, OK??",
   "error": "If I error, I tell you, OK??"
 }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 - Note: `try_attempt` is unsigned integer 8 bit and is retry counter; `attempt_interval` is unsigned integer 64bit and is time as seconds
 ---
</details>

<details close="close">
<summary><b>PUT</b> /private/api/settings/ftp</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |

 Body
 ```json
 {
   "active": true,
   "try_attempt": 3,
   "attempt_interval": 300,
   "status": null,
   "error": null
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
