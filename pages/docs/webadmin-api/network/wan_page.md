<h1>Network WAN</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/wirednetwork/status</summary>

 ---

 |      Header      | Data Type |
 | ---------------- | --------- |
 |   Authorization  | `String`  |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 {
  "dhcp": true,
  "wired_network_param": {
     "internet_ip": "192.168.1.2",
     "netmask": "255.255.255.0",
     "gateway": "192.168.1.1",
     "dns": " 1.1.1.1 8.8.8.8"
   }
 }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/wirednetwork/static</summary>

 ---

 |      Header      | Data Type |
 | ---------------- | --------- |
 |   Authorization  | `String`  |
 
 Body
 ```json
 {
  "internet_ip": "192.168.1.10",
  "netmask": "255.255.255.0",
  "gateway": "192.168.1.1",
  "dns": "1.1.1.1 8.8.8.8 1.0.0.1 8.8.4.4"
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
<summary><b>POST</b> /private/api/settings/wirednetwork/dynamic</summary>

 ---

 |      Header      | Data Type |
 | ---------------- | --------- |
 |   Authorization  | `String`  |
 
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

 ---

</details>
