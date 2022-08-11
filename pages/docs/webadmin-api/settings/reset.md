<h1>Settings Reset</h1>

<details close="close">
<summary><b>POST</b> /private/api/settings/reset</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |
 |     500      | actual_error_goes_here     |

 - Note: Everything goes to default factory configuration

 ---
</details>