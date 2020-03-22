package de.wirvsvirus.trackyourbed.dto.response;

import java.util.UUID;

public class WardDto {

  private UUID id;

  private String name;

  private UUID departmentId;

  private String wardType;

  public UUID getId() {
    return id;
  }

  public void setId(final UUID id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(final String name) {
    this.name = name;
  }

  public UUID getDepartmentId() {
    return departmentId;
  }

  public void setDepartmentId(final UUID departmentId) {
    this.departmentId = departmentId;
  }

  public String getWardType() {
    return wardType;
  }

  public void setWardType(final String wardType) {
    this.wardType = wardType;
  }

}
