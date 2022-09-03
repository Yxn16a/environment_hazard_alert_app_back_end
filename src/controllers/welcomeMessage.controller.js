export default function getWelcomeMessage(req,res) {
    const result = res.status(200).json({
        message: "Welcome to our Api",
    });
    return result
}