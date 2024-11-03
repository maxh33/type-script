// example of casting in typescript converting a variable to another type
namespace casting {
    let idade: any = 33;
    (idade as number).toFixed;
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x)
    });
    // let nome: string = 35 as string;
    let nome: string = 35 as unknown as string;
    nome.length;
}
