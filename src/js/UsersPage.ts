
import axios, {
    AxiosResponse,
    AxiosError
}

    from "../../node_modules/axios/index";



    interface Ihealth {

        id: number;
        bloodPressure: number;
        heartBeat: number;
        age: number;
        weight: number;
        gender: string;
        userId: number;
    }

    interface IEnvironment{
        id:number;
        oxygen:number;
        nitrogen:number;
        carbonDioxide:number;
        methane:number;
        userId:number;
        }
    
let healthById:HTMLOListElement=<HTMLOListElement>document.getElementById("ShowHealthById");


   let GetById: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getMyData");
GetById.addEventListener("click", getAll);

   function getAll(): void {
       
 let IdInputElement:HTMLInputElement=<HTMLInputElement>document.getElementById("inputId");

 let idElement:string=IdInputElement.value;   
    let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/health/"+idElement ;
     axios.get(uri)
        .then(function (response: AxiosResponse): void {
            console.log(response.data.id);
            let result: string = "";
            result+="<p>" + "  Blood pressure:  " +response.data.bloodPressure+ "<br> Gender: " + response.data.gender+ "<br> Heart Beat: " + response.data.heartBeat + "<br> Weight: " + response.data.weight +  "</p>";
            healthById.innerHTML=result;
            console.log(result);
        })
        .catch((error:AxiosError)=>{
            console.log(error);
        })
    }


    let EnviroById:HTMLOListElement=<HTMLOListElement>document.getElementById("ShowHealthById");
    let GetByIdE: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getMyEnviroData");
    GetByIdE.addEventListener("click", getAllEnviro);
    function getAllEnviro(): void {
        let IdInputElement:HTMLInputElement=<HTMLInputElement>document.getElementById("inputId");
        let idElement:string=IdInputElement.value;   
        let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/environment/"+idElement;
        axios.get(uri)
        .then(function (response: AxiosResponse): void {
            console.log(response.data.id);
            let result1: string = "";
                    result1 += "<p>" + "User Id:" + response.data.userId + "<br>Oxygen: " + response.data.oxygen + "<br>Nitrogen:" + response.data.nitrogen + "<br>Methane: " + response.data.methane + "<br>CarbonDioxide: " + response.data.carbonDioxide + "</p>";
                    EnviroById.innerHTML = result1;
                    console.log(result1);
                })
        
            .catch(function (error: AxiosError) {
                console.log(error);
            })
            }