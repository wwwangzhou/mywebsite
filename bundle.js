const poems = [
    {
        title: "曹植 - 七步诗",
        body: [
            "煮豆持作羹，漉豉以為汁，",
            "萁在釜下燃，豆在釜中泣，",
            "本自同根生，相煎何太急？",
        ],
    },
];

function getRandomElementFromArray(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return undefined; // or null, or any other value that makes sense in your context
    }

    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * array.length);

    // Access the random element from the array
    const randomElement = array[randomIndex];

    // Return the random element
    return randomElement;
}

class Sonnet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hoveredLine: null };
    }

    renderLine(line, index) {
        return React.createElement(
            "p",
            {
                key: index,
                className:
                    this.state.hoveredLine === index ? "highlighted" : "",
                onMouseEnter: () => this.setState({ hoveredLine: index }),
                onMouseLeave: () => this.setState({ hoveredLine: null }),
            },
            line
        );
    }

    render() {
        const { title, body } = getRandomElementFromArray(poems);

        return React.createElement(
            "div",
            {},
            React.createElement("h1", {}, title),
            body.map((line, index) => this.renderLine(line, index))
        );
    }
}

ReactDOM.render(React.createElement(Sonnet), document.getElementById("root"));
