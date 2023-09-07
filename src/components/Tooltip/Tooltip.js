import "./Tooltip.css";

// Information needed to build the tooltip
const Tooltip = ({ interactionData }) => {
    if (!interactionData) {
        return null;
    }

    return (
        <div
            className="tooltip"
            style={{
                left: interactionData.xPos,
                top: interactionData.yPos,
            }}
        >
            {interactionData.name}
        </div>
    );
};

export default Tooltip;
