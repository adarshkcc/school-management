import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
	/* border-radius: 10px; */
	background-color: transparent;
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb
{
	/* border-radius: 10px; */
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
	/* background-color: #555; */
    background-color: ${({ theme }) => theme.color.main};
}
::-webkit-scrollbar:horizontal {
  display: none;
}

h1{
	color:#7e84a5;
	font-size: 26px;
}

//lable
.lable{
	color:#7e84a5;
	font-weight: 500;
	font-size: 16px;
}

// ant-design table f9f9fb

.ant-table-thead >tr>th{
	background:${({ theme }) => theme.color.table.th.background} !important;
	color: ${({ theme }) => theme.color.table.th.color}  !important;
	border-bottom: 1px solid ${({ theme }) => theme.color.third} !important;
}

.ant-table-wrapper .ant-table{
	color: ${({ theme }) => theme.color.table.td.color} !important;
	font-size: 16px;
	font-weight: 500;
	tbody{
		tr{
			&:first-child{
				td{
					border-top: none !important;
				}
			}
			td{
			border-top: 2px solid ${({ theme }) => theme.color.third} !important;
			}
		}
	}
}

// pagination
.ant-pagination{

	.ant-pagination-item {
		border-color: ${({ theme }) => theme.color.third} !important;
		box-shadow: 2px 3px 6px #d3d3d3d1;
		a{
			color:${({ theme }) => theme.color.main} !important;
		}
	}
.ant-pagination-item-active{
	background: ${({ theme }) => theme.color.main} !important;
	border-color:${({ theme }) => theme.color.main} !important ;
	a{
color:#fff !important;
}
} 
}

//input
.ant-input-affix-wrapper{
	border-color: #e4e8f6;
	color:#2e3e7fe0;

	.ant-input-prefix{
		background: #f1f1f8;
    padding: 5px;
    border-radius: 4px;
	}
	&:hover{
		border-color: #113b98 !important;
	}
	&:focus{
		border-color: #113b98 !important;
box-shadow: none;
	}
}

.ant-input{
	border-color: #e4e8f6;
	color:#2e3e7fe0;
	font-size: 16px;
	font-weight: 500;
	&:hover{
	border-color: #113b98;
	}
	&:focus{
	border-color: #113b98;
	}
}

// select 
.ant-select-item-option-content{
	color:#7e84a5;
}
.ant-select-selector{
	border: 1px solid #e4e8f6 !important;
	color: #2e3e7fe0 !important;
	font-size: 16px ;
	font-weight: 500;
	&:hover{
		border-color: #113b98 !important;
	}
}
.ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
	background: none;
	color:#2e3e7fe0;

}

.ant-select-item-option-active:not(.ant-select-item-option-disabled){
	background-color:#e4e8f661  !important;
}

// multi select
.ant-select-multiple {.ant-select-selection-item {
	background: ${({ theme }) => theme.color.main};
	border: 1px solid ${({ theme }) => theme.color.main};
	color: #fff;

}
.ant-select-selection-item-remove{
	color: #fff;
}
}
//tooltip
.ant-tooltip{
    --antd-arrow-background-color: rgb(255 255 255 / 85%);
.ant-tooltip-inner{
	background-color:#fff;
	color:#7e84a5;
}
}

//buttons
.add-btn {
      margin-left: auto;
      background: ${({ theme }) => theme.color.main};
      font-weight: 500;

      &:hover {
        border-color: ${({ theme }) => theme.color.main};
        color: ${({ theme }) => theme.color.main} !important;
        background: none !important;
      }
    }
`;
