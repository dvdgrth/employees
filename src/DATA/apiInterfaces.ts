import DATA from './MOCK_DATA.json'

interface Employee {
    "id": number;
    "firstName": string;
    "lastName": string;
    "jobTitle": string;
    "avatar": string;
    "ipAddress": string;
    "phone": string;
    "email": string;
    "department": string;
    "status": boolean;
}

export default function getEmployeeDataById(code: number) {
    return DATA.filter(
        function(data){ return data.id === code }
    )[0];
}

export function searchForSubstring(substring: string) {
    return sortAlphabetically(
        DATA.filter(
            function(data){
                if (data.lastName.toLocaleLowerCase().includes(substring.toLocaleLowerCase()) || data.firstName.toLocaleLowerCase().includes(substring.toLocaleLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    );
}



export function sortAlphabetically(employees: Employee[]) {
    function compare( a: Employee, b: Employee ) {
        if ( a.lastName < b.lastName ){
          return -1;
        }
        if ( a.lastName > b.lastName ){
          return 1;
        }
        return 0;
      };
      
      employees.sort( compare );
      return employees;
}

export function getAll() {
    return sortAlphabetically(DATA);
}