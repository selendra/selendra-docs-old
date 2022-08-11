<h1>Storage Page</h1>

<details close="close">
<summary><b>GET</b> /private/api/settings/storage/status</summary>

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
    "drive_label":  "Local  Content  Storage",
    "drive_partuuid":  {
     "drive_partuuid":  "kmp"
    },
    "free_space":  "3.3T",
    "total_space":  "3.6T",
    "percentage":  4
  },
  {
    "drive_label":  "Removeable  Device",
    "drive_partuuid":  {
       "drive_partuuid":  "7df645f6-2912-4f6f-bc80-6e823e75e8cb"
    },
    "free_space":  "3.7G",
    "total_space":  "3.9G",
    "percentage":  1
  },
  {
    "drive_label":  "Removeable  Device",
    "drive_partuuid":  {
      "drive_partuuid":  "3EB7-DF9A"
    },
    "free_space":  "4.0G",
    "total_space":  "4.0G",
    "percentage":  1
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
<summary><b>GET</b> /private/api/settings/storage/device/status/<em>{drive_partuuid}</em></summary>

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
   "name": "Removeable Device",
   "meta": {
      "item_last_modify_date": "2021-11-25 06:00:43",
      "item_is_dir": true,
      "item_size": 32768
   },
   "children": [
      {
         "name": "231_1- Keynote Proficient Student's Book_2016 -192p_backup.pdf",
         "meta": {
            "item_last_modify_date": "2021-11-24 12:18:53",
            "item_is_dir": false,
            "item_size": 30881022
         },
         "children": []
      },
      {
         "name": "231_1- Keynote Proficient Student's Book_2016 -192p.pdf",
         "meta": {
            "item_last_modify_date": "2021-11-24 13:16:09",
            "item_is_dir": false,
            "item_size": 30921636
         },
         "children": []
      },
      {
         "name": "Pichponereay NGOR_E4.8_Reflection Paper_Do School Kills Creativity.docx",
         "meta": {
            "item_last_modify_date": "2021-11-20 16:54:18",
            "item_is_dir": false,
            "item_size": 2955518
         },
         "children": []
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
<summary><b>POST</b> /private/api/settings/storage/device/copy_or_move</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body for <b><u>move file</u></b>
 ```json
 {
   "operation": "move",
   "source_uuid": "kmp",
   "source_items": ["www/test1", "testt"],
   "destination_uuid": "62AA-7652",
   "items_destination": ""
 }
 ```

  Body for <b><u>copy file</u></b>
 ```json
 {
   "operation": "copy",
   "source_uuid": "kmp",
   "source_items": ["www/test1", "testt"],
   "destination_uuid": "62AA-7652",
   "items_destination": ""
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
<summary><b>POST</b> /private/api/settings/storage/device/directory/creation</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "directory_name": "newfolder1234",
   "parent_directory": "",
   "drive_partuuid": "3EB010966E49278D"
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

</details>

<details close="close">
<summary><b>POST</b> /private/api/settings/storage/device/unmount</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "drive_partuuid": "7df645f6-2912-4f6f-bc80-6e823e75e8cb"
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
<summary><b>DELETE</b> /private/api/settings/storage/device/deletion</summary>

 ---

 |      Header      |                 Data Type               |
 | ---------------- | --------------------------------------- |
 |   Authorization  | `String` eg. `jwt_token_from_login_api` |
 
 Body
 ```json
 {
   "drive_partuuid": "kmp",
   "selected_filedir": [ "isaac/qwe/sjdf.txt", "john/aaaa", "john/text.txt" ]
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