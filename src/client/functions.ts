export const rpcCallback = global.exports['nsb_rpc'].callback_request

export const rpc = (event: string, ...params: any[]): Promise<any> => {
    return new Promise((resolve) => {
        rpcCallback(event, (result) => {
            resolve(result)
        }, ...params)
    })
}

export const delay = (ms: number): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, ms)
    })
}

export const getServerSpawnedVehicle = async (): Promise<number> => {
    await delay(50)
    return GetVehiclePedIsIn(PlayerPedId(), false)
}

export const progressBar = (title: string, length: number, data: Record<string, unknown>): Promise<any> => {
    return new Promise((resolve) => {
        emit('nsb_ui:client:progress:start', title, length, data, (result) => resolve(result))
    })
}

export const loadAnimDict = (dict: string): Promise<boolean> => {
    if (HasAnimDictLoaded(dict)) {
        return Promise.resolve(true)
    }
    RequestAnimDict(dict)
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if (HasAnimDictLoaded(dict)) {
                clearInterval(interval)
                resolve(true)
            }
        }, 50)
    })
}
