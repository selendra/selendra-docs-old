<h1>Domain Page</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/dns/status/<em>{zone}</em></summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |

 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |
 
 Body
 ```json
 ```

 Response 200 
 ```json
 [
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

 Body for <b><u>change status</u></b> or <b><u>add new domain_name</u></b>
 ```json
 {
   "domain_name": "koompi.com",
   "status": true,
   "zone_record": null
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

 - Note: `subdomain_name` must be a subdomain without its main website name after and is also website form; `dns_type` must only be A, AAAA, CNAME, MX 10, PTR, CAA, SRV, TXT, SOA.

</details>

<details close="close">
<summary><b>PUT</b> /private/api/settings/dns/domain_name/rename/<em>{zone}</em>/<em>{old_domain}</em></summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 |    Query URL     |               Data Type              |
 | ---------------- | ------------------------------------ |
 |       zone       | `Enum` eg. `internal` or `external`  |
 |    old_domain    | `string` eg. `koompi.app`            |

 Body
 ```json
 newdomain.com
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
<summary><b>DELETE</b> /private/api/settings/dns/delete/<em>{zone}</em>/<em>{domain}</em></summary>

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
 ```

 |     Error    |             Body           |
 | ------------ | -------------------------- |
 |     401      | Token invalid              |
 |     410      | Token expired or incorrect |
 |     500      | actual_error_goes_here     |

 ---

</details>