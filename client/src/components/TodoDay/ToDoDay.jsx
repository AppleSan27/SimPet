import { ToDo } from "../ToDo/ToDo";


export function TodoDay() {

    let text = [
      { id:1,
        date: "10.11.2021",
        time: 9,
        status: true,
        category: "eat",
        body: 'покормить кота',
    },
    { id:2,
      date: "10.11.2021",
      time: 13,
      status: true,
      category: "eat",
      body: 'покормить кота',
  },
  { id:3,
    date: "10.11.2021",
    time: 17,
    status: true,
    category: "eat",
    body: 'покормить кота',
},
  ]
    return (
      <> {text.map(el => 
      <>
        <ToDo todo={el}/>
     </>
      )}
    

      </> 
    );
  }
  