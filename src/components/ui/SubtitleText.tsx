export default function SubtitleText({text, styles}:{text:string, styles?:string}) {
    return(
        <p className={`text-normal-size text-text-secondary ${styles || ""}`}>{text}</p>
    )
}