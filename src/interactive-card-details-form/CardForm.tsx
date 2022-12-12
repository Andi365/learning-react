import CardSimpleInput from "./cardInputFields";
import { CardDetails } from "./carddetailscomponent";
import complete from "./images/icon-complete.svg";

interface CardForm {
  placeholder: CardDetails;
  data: CardDetails;
  isSubmitted: boolean;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CardForm = (props: CardForm) => {
  const { placeholder, data, isSubmitted, handleOnChange } = props;
  var { handleSubmit } = props;
  const { holderName, cardNumber, expMonth, expYear, cvc } = data;

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);

    // const elements = e.target.elements.cvc;

    console.log(elements);

    var error = false;
    const formFiels = Object.entries(data).forEach(([key, value]) => {
      if (value === "") error = true;
      switch (key) {
        case "holderName":
          break;

        default:
          break;
      }
      console.log(key, value);
    });

    if (error) {
      return;
    }
    props.handleSubmit(e);
  };
  return (
    <div className="mb-0 flex flex-1 items-center bg-white px-6 lg:p-0">
      {isSubmitted ? (
        <div className="flex w-full flex-col items-center text-center lg:mx-auto lg:w-1/2 ">
          <img
            className="m-8 h-24 w-24 rounded-full shadow-lg"
            src={complete}
          />
          <h2 className="m-4 text-xl uppercase text-very-dark-violet">
            Thank you!
          </h2>
          <p className="pb-6 text-gray-400">We've added your card details</p>
          <button className="my-4 w-full bg-very-dark-violet py-3 text-xl">
            Continue
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="" action="#">
          <div className="lg:mx-auto lg:w-1/2">
            <CardSimpleInput
              labelText="Cardholder name"
              placeholder={"e.g. " + placeholder.holderName}
              name="holderName"
              value={holderName}
              handleOnChange={handleOnChange}
              classList="input-primary px-4 w-full"
            />
            <CardSimpleInput
              labelText="Card number"
              placeholder={"e.g. " + placeholder.cardNumber}
              name="cardNumber"
              value={cardNumber}
              handleOnChange={handleOnChange}
              classList="input-primary px-4 w-full"
            />
            <div className="grid grid-cols-2 gap-2 pt-4">
              <div className="flex flex-col">
                <label htmlFor="exp-date" className="label-primary">
                  exp. date (MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    className="input-primary w-full px-4"
                    name="expMonth"
                    type="text"
                    value={expMonth}
                    placeholder={placeholder.expMonth}
                    onChange={handleOnChange}
                  />
                  <input
                    className="input-primary w-full px-4"
                    name="expYear"
                    type="text"
                    value={expYear}
                    placeholder={placeholder.expYear}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="cvc" className="label-primary">
                  CVC
                </label>
                <input
                  className="input-primary"
                  type="text"
                  name="cvc"
                  value={cvc}
                  placeholder={placeholder.cvc}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <button
              className="my-4 w-full bg-very-dark-violet py-3 text-xl"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CardForm;
