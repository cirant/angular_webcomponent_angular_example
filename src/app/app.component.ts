import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola mundo';
  showModal = false;

  tableData = {
    headers: {
      checkboxArea: "",
      diagnostico: "Nombre del diagnóstico",
      fecha: "Fecha",
      estado: "Estado",
      eno: "",
      ges: "",
      acciones: ""
    },
    body: [
      {
        checkboxArea: "active",
        diagnostico:
          "Afecciones respiratorias debidas a inhalación de gases, humos…",
        estado: "confirmado",
        fecha: "Fecha",
        eno: "ENO",
        ges: "GES",
        acciones: "xxxxxx"
      }
    ]
  };

  tableDiagnostico = {
    headers: {
      checkbox: false,
      diagnostico: "Nombre del diagnóstico",
      estado: "Estado",
      fecha: "Fecha",
      eno: "",
      ges: "",
      acciones: "acciones"
    },
    body: [
      {
        checkbox: false,
        diagnostico: {
          variant: "p",
          type: "primary",
          text:
            "Afecciones respiratorias debidas a inhalación de gases, humos…"
        },
        estado: "confirmado",
        fecha: {
          size: "",
          text: "2014-12-24  24:15:00"
        },
        eno: {
          weight: "bold",
          text: "ENO"
        },
        ges: {
          weight: "bold",
          text: "GES"
        },
        acciones: [
          {
            text: "Editar",
            variant: "text",
            icon: "edit",
            onClick: function () {
              alert('editar')
            }
          },
          {
            text: "Eliminar",
            variant: "text",
            color: "error",
            icon: "trash",
            onClick: function () {
              alert('eliminar')
            }
          }
        ]
      },
      {
        checkbox: false,
        diagnostico: {
          variant: "p",
          type: "primary",
          text:
            "Afecciones respiratorias debidas a inhalación de gases, humos…"
        },
        estado: "sospecha",
        fecha: {
          size: "",
          text: "2014-12-24  24:15:00"
        },
        eno: {
          weight: "bold",
          text: "ENO"
        },
        ges: {
          weight: "bold",
          text: "GES"
        },
        acciones: [
          {
            text: "Editar",
            variant: "text",
            icon: "edit",
            onClick: function () {
              alert('editar')
            }
          },
          {
            text: "Eliminar",
            variant: "text",
            color: "error",
            icon: "trash",
            onClick: function () {
              alert('eliminar')
            }
          }
        ]
      },
      {
        checkbox: false,
        diagnostico: {
          variant: "p",
          type: "primary",
          text:
            "Afecciones respiratorias debidas a inhalación de gases, humos…"
        },
        estado: "",
        fecha: {
          size: "",
          text: "2014-12-24  24:15:00"
        },
        eno: {
          weight: "bold",
          text: "ENO"
        },
        ges: {
          weight: "bold",
          text: "GES"
        },
        acciones: [
          {
            text: "Editar",
            variant: "text",
            icon: "edit",
            onClick: function () {
              alert('editar')
            }
          },
          {
            text: "Eliminar",
            variant: "text",
            color: "error",
            icon: "trash",
            onClick: function () {
              alert('eliminar')
            }
          },
        ]
      }
    ]
  };

  buttonAction() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addElementToTable(e) {
    const elementToAdd = e.detail[0];

    this.tableDiagnostico.body.unshift({
      checkbox: false,
      diagnostico: {
        variant: "p",
        type: "primary",
        text:
          elementToAdd.medicalDiagnostic.name
      },
      estado: "confirmado",
      fecha: {
        size: "",
        text: "2014-12-24  24:15:00"
      },
      eno: {
        weight: "bold",
        text: "ENO"
      },
      ges: {
        weight: "bold",
        text: "GES"
      },
      acciones: [
        {
          text: "Editar",
          variant: "text",
          icon: "edit",
          onClick: function () {
            alert('editar')
          }
        },
        {
          text: "Eliminar",
          variant: "text",
          color: "error",
          icon: "trash",
          onClick: function () {
            alert('eliminar')
          }
        }
      ]
    });

  };
}
