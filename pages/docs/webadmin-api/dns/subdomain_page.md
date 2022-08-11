<h1>Subdomain Page</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/dns/status/<em>{zone}</em>/<em>{domain}</em></summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |

 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |
 |      domain      | `string` eg. `koompi.app`            |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 {
   "domain_name": "koompi.app",
   "status": true,
   "zone_record": [
     {
      "subdomain_name": "ns",
      "dns_type": "A",
      "address": "10.100.100.1"
     },
     {
      "subdomain_name": "sala",
      "dns_type": "CNAME",
      "address": "ns"
     }
   ]
  }
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |

 ---
</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/dns/new/<em>{zone}</em></summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |

 Body for <b><u>change status</u></b> or <b><u>add new subdomain_name records</u></b>
 ```json
 {
   "domain_name": "koompi.com",
   "status": true,
   "zone_record":  [
     {
        "domain_name": "koompi.com",
        "status": true,
        "zone_record": null
     },
     {
        "domain_name": "website1.local",
        "status": true,
        "zone_record": null
     }
   ]
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

 - Note: `subdomain_name` must be a subdomain without its main website name after and is also website form; `dns_type` must only be A, AAAA, CNAME, MX 10, PTR, CAA, SRV, TXT, SOA.

 ---

</details>

<details close="close">
<summary><b>PUT</b> /private/api/settings/dns/edit/<em>{zone}</em>/<em>{domain}</em></summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |
 |      domain      | `string` eg. `koompi.app`            |

 Body
 ```json
 {
   "old_record": {
      "subdomain_name": "ns",
      "dns_type": "A",
      "address": "10.100.100.1"
   },
   "new_record": {
      "subdomain_name": "ns",
      "dns_type": "A",
      "address": "10.1.2.2"
   },
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
<summary><b>PUT</b> /private/api/settings/dns/sort/<em>{zone}</em>/<em>{domain}</em></summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |
 |      domain      | `string` eg. `koompi.app`            |

 Body
 ```json
 [
   {
     "subdomain_name": "3",
     "dns_type": "A",
     "address": "192.168.1.7"
   },
   {
     "subdomain_name": "1",
     "dns_type": "NS",
     "address": "john"
   },
   {
     "subdomain_name": "2",
     "dns_type": "NS",
     "address": "koompi.app."
   }
 ]  
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
<summary><b>DELETE</b> /private/api/settings/dns/delete/<em>{zone}</em>/<em>{domain}</em></summary>/subdomain

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |
 |      domain      | `string` eg. `koompi.app`            |

 Body
 ```json
 {
   "subdomain_name": "",
   "dns_type": "A",
   "address": "10.100.100.1"
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
