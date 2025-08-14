# Add place approval system

- For featuring any place the admin approval is needed

  - Admin can see and mark the place as
    - WAITING_FOR_APPROVAL ~ when create a new place
    - HOLD ~ `admin` can hold the request
    - APPROVED ~ `admin` can approve the request
    - REJECT ~ `admin` can reject

- `Opening hour` creating system
  - separate the _**opening hour**_ array of object from body. i.e

```json
    [

            sat:{
                open: 10:00:00,
                close: 07:00:00,
                isClosed: false
            },
    ]
```
