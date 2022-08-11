<h1>Network WLAN</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/wirelessnetwork/status</summary>

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
   "router_ip": "10.100.100.1",
   "netmask": "255.255.255.0",
   "range_start": "10.100.100.1",
   "range_end": "10.100.100.255",
   "dns": "10.100.100.1 1.1.1.1",
   "default_lease": "1800",
   "max_lease": "7200",
   "timezone": "Asia/Phnom_Penh"
 }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/wirelessnetwork</summary>

 ---

 |      Header      | Data Type |
 | ---------------- | --------- |
 |   Authorization  | `String`  |
 
 Body
 ```json
 {
  "router_ip": "10.100.100.1",
  "netmask": "255.255.255.0",
  "range_start": "10.100.100.1",
  "range_end": "10.100.100.254",
  "dns": "1.1.1.1 8.8.8.8",
  "default_lease": "1800",
  "max_lease": "7200",
  "timezone": "Asia/Phnom_Penh"
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
