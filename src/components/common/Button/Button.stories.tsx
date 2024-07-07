import {StoryObj, Meta} from "@storybook/react"; // Adjust the import based on your project structure
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon, InfoOutlineIcon} from "@chakra-ui/icons";
import {fn} from "@storybook/test";
const meta = {
  title: "Components/Atoms/Button",
  component: Button,
} as Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  argTypes: {
    variant: {
      options: ["solid", "outline"],
      control: {type: "radio"},
    },
    disabled: {control: {type: "boolean"}},
    leftIcon: {
      control: {type: "boolean"},
      mapping: {false: "", true: <InfoOutlineIcon />},
    },
    rightIcon: {
      control: {type: "boolean"},
      mapping: {false: "", true: <ArrowBackIcon />},
    },
    fontSize: {
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {type: "select"},
    },
  },
  args: {
    height: "20px",
    width: "80px",
    borderRadius: 2,
    onClick: fn(),
  },
  render: (argTypes) => <Button {...argTypes}>Button</Button>,
};
