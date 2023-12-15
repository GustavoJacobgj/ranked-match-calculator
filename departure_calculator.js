let result = calculateLevel("Tinhão", 69, 12)

console.log(result)

function calculateLevel(name, victories, defeats) {
    let victoriesBalance = victories - defeats

    let level, message

    switch (true) {
        case victories < 10:
            level = "Iron"
            break
        case victories >= 11 && victories <= 20:
            level = "Bronze"
            break
        case victories >= 21 && victories <= 50:
            level = "Silver"
            break
        case victories >= 51 && victories <= 80:
            level = "Gold"
            break
        case victories >= 81 && victories <= 90:
            level = "Diamond"
            break
        case victories >= 91 && victories <= 100:
            level = "Legendary"
            break
        default:
            level = "Immortal"
    }

    message = `The Hero ${name} has a balance of ${victoriesBalance} and is at the ${level} level!`

    return message
}
 