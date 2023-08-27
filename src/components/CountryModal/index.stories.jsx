import CountryModal from "./index";

export default {
  title: "components/CountryModal",
  component: CountryModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Small = {
  args: {
    size: "small",
    label: "CountryModal",
  },
};
