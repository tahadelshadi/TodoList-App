import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import "./datapicker.css";

export default function DatePicker({taskDate, setTaskDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          className="rounded-2xl"
          views={['year', 'month', 'day', 'hours', 'minutes']}
          slotProps={{ textField: { variant: 'outlined' } }}
          label="Set Date Task ..."
          value={taskDate}
          onChange={(newValue) => {
            if(newValue){
              setTaskDate(new Date(newValue.$d).toISOString());
            }
          }}
        />
      </LocalizationProvider>
  );
}
