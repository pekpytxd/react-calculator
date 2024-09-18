export default function CalculatorActions({action, onClick}) {
    return (
        <>
            <button className="bg-blue-700 text-3xl p-3 text-white border-2 border-blue-200"
                    onClick={() => onClick(action)}>
                {action}
            </button>
        </>
    )
}