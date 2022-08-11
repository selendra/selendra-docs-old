<h1>Settings Update</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/update/status</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 [
   {
     "id": "1",
     "display_name": "First Patch Update",
     "update_size": 307,
     "sys_update": false,
     "status": "Installing",
   },
   {
     "id": "2",
     "display_name": "Second Patch Update",
     "update_size": 603467495,
     "sys_update": false,
     "status": "Downloading",
   },
   {
     "id": "3",
     "display_name": "Third Patch Update",
     "update_size": 157981621,
     "sys_update": false,
     "status": "New",
   }
 ]
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/update/update</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "id": "1",
   "sys_update": true
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
