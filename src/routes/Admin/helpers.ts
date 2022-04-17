import { useStore } from 'hooks';
import { useState } from 'react';
import { ISeatRowType, ISeatState } from 'types';

export const getSeatNumbers = (seats: string) =>
  seats.split(',').map(i => parseInt(i, 10) - 1);
export const DEFAULT_PRICE = 100;

export const generateSeatsData = (
  rows: number,
  cols: number,
  rowConfig: any,
) => {
  return Array.from(Array(rows).keys()).map(rowIndex => {
    const price =
      (rowConfig[rowIndex] && rowConfig[rowIndex].price) ?? DEFAULT_PRICE;
    return {
      type: ISeatRowType.Normal,
      priceLabel: `₹${price}`,
      priceVal: price,
      rowName: String.fromCharCode(97 + rowIndex).toLocaleUpperCase(),
      rowSeats: Array.from(Array(cols).keys()).map(colIndex => {
        if (!rowConfig[rowIndex]) {
          return {
            state: ISeatState.Vacant,
          };
        }
        if (
          rowConfig[rowIndex].disabled &&
          rowConfig[rowIndex].disabled.includes(colIndex)
        ) {
          return {
            disabled: true,
            state: ISeatState.Vacant,
          };
        }
        if (
          rowConfig[rowIndex].reserved &&
          rowConfig[rowIndex].reserved.includes(colIndex)
        ) {
          return {
            state: ISeatState.Reserved,
          };
        }
        return {
          state: ISeatState.Vacant,
        };
      }),
    };
  });
};

export const useAdminConfig = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(5);
  const [timeLimit, setTimelimit] = useState(5);
  const [rowConfig, setRowConfg] = useState({});

  const createInitialSeatsData = useStore(state => state.setSeatsData);
  const createTimerLimit = useStore(state => state.setTimerLimit);

  return {
    rows,
    setRows,
    cols,
    setCols,
    timeLimit,
    setTimelimit,
    rowConfig,
    setRowConfg,
    createInitialSeatsData,
    createTimerLimit,
  };
};
