    const addTwoNumbers = (params:any) => {
        return params.first + params.second;
    };

const hola =() => {
        console.log(
        addTwoNumbers({
        first: 2,
        second: 4,
        })===6
    );

    console.log(
    addTwoNumbers({
    first: 10,
    second: 20,
    })===30
    );
    
};

hola();
