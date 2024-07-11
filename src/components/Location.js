const Location = () => {
  return (
    <>
      <div className="card mt-4 border-0 shadow-sm rounded-0">
        <div className="card-body p-4">
          <p>Location</p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label
              class="form-check-label"
              for="flexRadioDefault1"
              style={{ fontSize: "16px" }}
            >
              All
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              class="form-check-label"
              for="flexRadioDefault2"
              style={{ fontSize: "16px" }}
            >
              Siargao , General Luna
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              class="form-check-label"
              for="flexRadioDefault2"
              style={{ fontSize: "16px" }}
            >
              Siargao , Burgos Pacifico
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              class="form-check-label"
              for="flexRadioDefault2"
              style={{ fontSize: "16px" }}
            >
              Baler, Aurora
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              class="form-check-label"
              for="flexRadioDefault2"
              style={{ fontSize: "16px" }}
            >
              San Juan, La Union
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
