using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Employees.Data.Migrations
{
    public partial class roles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_RolesEmployees_EmployeeId",
                table: "RolesEmployees",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_RolesEmployees_RoleId",
                table: "RolesEmployees",
                column: "RoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_RolesEmployees_Employees_EmployeeId",
                table: "RolesEmployees",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RolesEmployees_Roles_RoleId",
                table: "RolesEmployees",
                column: "RoleId",
                principalTable: "Roles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RolesEmployees_Employees_EmployeeId",
                table: "RolesEmployees");

            migrationBuilder.DropForeignKey(
                name: "FK_RolesEmployees_Roles_RoleId",
                table: "RolesEmployees");

            migrationBuilder.DropIndex(
                name: "IX_RolesEmployees_EmployeeId",
                table: "RolesEmployees");

            migrationBuilder.DropIndex(
                name: "IX_RolesEmployees_RoleId",
                table: "RolesEmployees");
        }
    }
}
