import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DatePicker({ taskDate, setTaskDate }) {
  const isDarkMode = useSelector((state) => state.darkMode.value);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main:  "#76ABAE",
          },
          background: {
            default: isDarkMode ? "#31363F" : "#fff",
            paper: isDarkMode ? "#31363F" : "#fff",
          },
          text: {
            primary: !isDarkMode ? "#9e9e9e" : "#fff",
          },
        },
      }),
    [isDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          className="DateTimePicker dark:"
          views={["year", "month", "day", "hours", "minutes"]}
          slotProps={{
            sx:{svg:{color:"border"}},
            textField: {
              variant: "outlined",
              size: "small",
            },
            openPickerButton: { color: "primary" },
          }}
          value={taskDate}
          onChange={(newValue) => {
            if (newValue) {
              setTaskDate(new Date(newValue.$d).toISOString());
            }
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

// field: { className: "w-full bg-white dark:bg-[#31363F]  rounded-2xl" }
