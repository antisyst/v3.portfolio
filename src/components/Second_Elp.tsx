import styled from 'styled-components';

const EllipseIntSecond = styled.div `
    position: absolute;
    background: var(--var-color-component-primary);
    filter: blur(200px);
    top: 0;
    left: 0;
    width: 300px;
height: 300px;
animation: EllipseAnim 40s ease 0s infinite normal forwards;

@keyframes EllipseAnim {
	0% {
		top: 0;
    left: 0;
	}

	10% {
		top: 40vh;
        left: 28vh;
	}

	20% {
		top: 26vh;
        left: 42vh;
	}

    30% {
        top: 90vh;
        left: 19vh;
	}

    40% {
        top: 38vh;
        left: 26vh;
	}

    50% {
        top: 18vh;
        left: 34vh;
	}

    60% {
        top: 65vh;
        left: 33vh;
	}

    70% {
        top: 76vh;
        left: 55vh;
	}

    80% {
        top: 42vh;
        left: 69vh;
	}

    90% {
        top: 44vh;
        left: 67vh;
	}

    100% {
        top: 19vh;
        left: 59vh;
	}
}
`

const EllipseSecond = () => {
    return(
    <EllipseIntSecond></EllipseIntSecond>
    )
}

export default EllipseSecond;