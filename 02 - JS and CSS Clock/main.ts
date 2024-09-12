enum HandType {
    Second = 0,
    Minute,
    Hour
}

function timeToDegrees(time: number, max: number): number {
    return ((time / max) * 360) + 90;
}

function setClockHand(handType: HandType) {
    // get time
    const now = new Date();
    let hand: any;
    let time: number;
    let max: number;
    switch (handType) {
        case HandType.Second:
            time = now.getSeconds();
            hand = document.querySelector('.second-hand');
            max = 60;
            break;
        case HandType.Minute:
            time = now.getMinutes();
            hand = document.querySelector('.min-hand');
            max = 60;
            break;
        case HandType.Hour:
            time = now.getHours();
            hand = document.querySelector('.hour-hand');
            max = 12;
            break;
    }
    const degrees = timeToDegrees(time, max);

    // apply degrees to the clock hands
    if (time === 0) {
        hand.style.transition = 'none';
    } else {
        hand.style.transition = 'all 0.1s cubic-bezier(0, 1.68, 1, 1)';
    }

    hand.style.transform = `rotate(${degrees}deg)`;
}

function setDate() {
    setClockHand(HandType.Second);
    setClockHand(HandType.Minute);
    setClockHand(HandType.Hour);
}

setInterval(setDate, 1000);