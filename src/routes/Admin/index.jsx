import { Button } from 'components/atoms/Button';
import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { useNavigate } from 'react-router-dom';
import {
  DEFAULT_PRICE,
  generateSeatsData,
  getSeatNumbers,
  useAdminConfig,
} from './helpers';

// Admin will be a seperate application altogether and we will be getting this data through an api
// I'm keeping all the data inside here itself for easy implementation.

const AdminApp = () => {
  const {
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
  } = useAdminConfig();

  const onRowsFieldChange = e => {
    e.target.value && setRows(parseInt(e.target.value, 10));
  };
  const onColsFieldChange = e =>
    e.target.value && setCols(parseInt(e.target.value, 10));
  const onTLFieldChange = e =>
    e.target.value && setTimelimit(parseInt(e.target.value, 10));
  const naivgate = useNavigate();
  const onSubmit = () => {
    const seatsData = generateSeatsData(rows, cols, rowConfig);

    console.log(seatsData);

    createInitialSeatsData(seatsData);
    createTimerLimit(timeLimit * 60 * 1000);

    naivgate('/book');
  };

  const onRowPriceChange = (val, price) => {
    setRowConfg({
      ...rowConfig,
      [val]: {
        ...rowConfig[val],
        price: price,
      },
    });
  };

  const onDisabledSeatsChange = (val, seats) => {
    setRowConfg({
      ...rowConfig,
      [val]: {
        ...rowConfig[val],
        disabled: getSeatNumbers(seats),
      },
    });
  };
  const onSoldSeatsChange = (val, seats) => {
    setRowConfg({
      ...rowConfig,
      [val]: {
        ...rowConfig[val],
        reserved: getSeatNumbers(seats),
      },
    });
  };

  return (
    <>
      <div className="mt-10">
        <div className="md:grid ">
          <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Rows
                      </label>
                      <input
                        type="text"
                        maxLength={2}
                        defaultValue={3}
                        className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={onRowsFieldChange}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Please add total rows and cols of the seats available.
                        Max 26 rows (A-Z) and 99 cols.
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Cols
                      </label>
                      <input
                        type="text"
                        maxLength={2}
                        defaultValue={5}
                        className="mt-1  py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={onColsFieldChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Time limit (In minutes)
                      </label>
                      <input
                        type="number"
                        defaultValue={5}
                        className="mt-1  py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={onTLFieldChange}
                      />
                    </div>
                  </div>
                </div>

                {Array.from(Array(rows).keys()).map(val => {
                  return (
                    <div className="px-4 py-5 bg-white sm:p-6" key={val}>
                      <div
                        className="hidden sm:block bg-white"
                        aria-hidden="true"
                      >
                        <div className="py-5">
                          <div className="border-t border-gray-200 " />
                        </div>
                      </div>
                      <div className="w-full text-indigo-500 py-3">
                        Row: {String.fromCharCode(97 + val).toLocaleUpperCase()}{' '}
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Row price
                          </label>
                          <input
                            type="text"
                            defaultValue={DEFAULT_PRICE}
                            className="mt-1  py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={e =>
                              onRowPriceChange(
                                val,
                                parseInt(e.target.value, 10),
                              )
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Disabled seats
                          </label>
                          <input
                            type="text"
                            placeholder="1,5,7"
                            className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={e =>
                              onDisabledSeatsChange(val, e.target.value)
                            }
                          />
                          <p className="mt-2 text-sm text-gray-500">
                            Seats which are not present actually (Use this for
                            styling the layout)
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Sold out seats
                          </label>
                          <input
                            type="text"
                            placeholder="4,5,10"
                            className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={e =>
                              onSoldSeatsChange(val, e.target.value)
                            }
                          />
                          <p className="mt-2 text-sm text-gray-500">
                            Seats which are already reserved. This data also
                            would be coming from BE
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button onClick={onSubmit}>
                    Open booking application with this configuration
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export const Admin = () => {
  return (
    <BaseLayout
      header={<Header />}
      main={
        <div className="container mx-auto">
          <AdminApp />
        </div>
      }
    ></BaseLayout>
  );
};
