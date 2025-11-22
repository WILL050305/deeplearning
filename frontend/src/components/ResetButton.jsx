import styled from 'styled-components';

const ResetButton = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 20 20" height={20} fill="none" className="svg-icon">
          <g strokeWidth="1.5" strokeLinecap="round" stroke="#ff342b">
            <path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468" />
            <path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986" />
          </g>
        </svg>
        <span className="lable">Reiniciar</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 8px;
    height: 50px;
    width: 130px;
    border: none;
    background: #ff362b34;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .lable {
    line-height: 20px;
    font-size: 17px;
    color: #ff342b;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .button:hover {
    background: #ff362b52;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 52, 43, 0.4);
  }

  .button:active {
    transform: scale(0.95);
  }

  .button:hover .svg-icon {
    animation: spin 2s linear infinite;
  }

  .svg-icon {
    transition: transform 0.3s ease;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

export default ResetButton;
