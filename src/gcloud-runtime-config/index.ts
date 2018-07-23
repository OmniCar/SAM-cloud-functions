const runtimeConfig = require('cloud-functions-runtime-config');

export async function getRuntimeConfig(configName:string, variableNames:string[]):Promise<any>{
    let configOutputArray = await runtimeConfig.getVariables(configName, variableNames);

    let configOutputObject:any = {};
    let i = 0;
    variableNames.forEach((variableName:string) => {
        configOutputObject[variableName] = configOutputArray[i];
        i++;
    })
    return configOutputObject;
}