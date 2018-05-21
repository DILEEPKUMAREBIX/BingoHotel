import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {
  constructor() { }
  getDataConf() {
    return [
      // {
      //   prop: 'id'
      // },
      {
        prop: 'age',
        name: 'Age'
      },
      {
        prop: 'name',
        name: 'Name'
      },
      {
        prop: 'gender',
        name: 'Gender'
      },
      {
        prop: 'email',
        name: 'Email'
      },
      {
        prop: 'lastactive',
        name: 'Last Active'
      },
      {
        prop: 'created',
        name: 'Created'
      },
      {
        prop: 'phone',
        name: 'Phone number'
      }
    ];
  }
  getAll() {
    return [
      {

        "age": 40,
        "name": "Mclean Brady",
        "gender": "male",
        "lastactive": "200days ago",
        "email": "mcleanbrady@jamnation.com",
        "created": "40 days ago",
        "phone": "+1 (875) 472-2061",

      },
      {

        "age": 39,
        "name": "Dillon Ruiz",
        "gender": "male",
        "lastactive": "200days ago",
        "email": "dillonruiz@acrodance.com",
        "created": "40 days ago",
        "phone": "+1 (858) 562-2261",

      },

    ]
  }

}
