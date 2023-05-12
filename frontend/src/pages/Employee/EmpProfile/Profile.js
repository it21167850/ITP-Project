import React from "react";
import "./Profile.module.css";

export default function Profile() {
  return (
    <div
      class="container rounded bg-white mt-5 mb-5 "
      style={{ height: "800px" }}
    >
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span class="font-weight-bold">Edogaru</span>

            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="first name"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Employee ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Employee ID"
                />
              </div>
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Address"
              />

              <div class="col-md-12">
                <label class="labels">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Role</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Role"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary profile-button" type="button">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
