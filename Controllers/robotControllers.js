class RobotControllers {
    helloWorldRequest = async (ws, res) => {
        ws.on('message', msg => {
            ws.send(msg)
        })

        ws.on('close', () => {
            console.log('WebSocket was closed')
        })
    }
}

export default new RobotControllers()