import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";
jest.mock('./request');

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it("renders users listing", () => {
    const ul = component.find("#users-listing");
    expect( ul.length ).toEqual(1);
  });

  it("renders each user in state", () => {
    const renderedUsers = component.update().find("#users-listing li");
    const stateUsers = component.state().users;
    expect( renderedUsers.length ).toEqual( stateUsers.length );
  });

  it("renders img for each user", () => {
    const numStateUsers = component.update().state().users.length;
    const numImg = component.find("#users-listing li img").length;
    expect( numImg ).toEqual( numStateUsers );
  });

  it("renders label for each user", () => {
    const numStateUsers = component.update().state().users.length;
    const numLabels = component.find("#users-listing li label").length;
    expect( numLabels ).toEqual( numStateUsers );
  });

  it("does not render duplicate users", () => {
    const users = component.update().state().users;
    const uniqueIds = [];
    users.forEach( (user) => {
      const curId = user.id;
      if( ! uniqueIds.includes( curId ) ){
        uniqueIds.push( curId );
      }
    });//forEach()

    // number of uniqueIds should be equal to total no. of users in state
    expect( uniqueIds.length ).toEqual( users.length );
  });
});
