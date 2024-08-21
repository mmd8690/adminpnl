import { FastField } from 'formik';
import React from 'react';
import SpinnerLoad from '../SpinnerLoad';

const SumitButton = () => {
    return (
        <div>
             <FastField>
                    {({ form }) => {
                      return (
                        <button
                          type="submit"
                          className="btn btn-primary "
                          disabled={form.isSubmitting}
                        >
                          ذخیره
                          {form.isSubmitting ? (
                            <SpinnerLoad
                              colorClass={"text-white"}
                              isSmall={true}
                              inline={true}
                            />
                          ) : null}
                        </button>
                      );
                    }}
                  </FastField>
        </div>
    );
}

export default SumitButton;
