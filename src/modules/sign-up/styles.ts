import styled from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  display: flex;
  /* width: 100vw; */
  /* height: 100vh; */
`

export const Content = styled.main`
  /* font-size: 40px; */
  /* padding: 30px; */
  /* margin-left: 200px; */
  flex: 1;

  .create-orphanage-form {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    fieldset {
      border: 0;

      legend {
        width: 100%;

        font-size: 32px;
        line-height: 34px;
        color: #5c8599;
        font-weight: 700;

        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
    }
    fieldset + fieldset {
      margin-top: 80px;
    }

    .input-block {
      label {
        display: flex;
        color: #8fa7b3;
        margin-bottom: 8px;
        line-height: 24px;

        span {
          font-size: 14px;
          color: #8fa7b3;
          margin-left: 24px;
          line-height: 24px;
        }
      }
      input {
        width: 100%;
        background: #f5f8fa;
        border: 1px solid #d3e2e5;
        border-radius: 20px;
        outline: none;
        color: #5c8599;
        height: 64px;
        padding: 0 16px;
      }

      textarea {
        width: 100%;
        background: #f5f8fa;
        border: 1px solid #d3e2e5;
        border-radius: 20px;
        outline: none;
        color: #5c8599;
        min-height: 120px;
        max-height: 240px;
        resize: vertical;
        padding: 16px;
        line-height: 28px;
      }

      .new-image {
        width: 100%;
        height: 64px;
        background: #f5f8fa;
        border: 1px dashed #96d2f0;
        border-radius: 20px;
        cursor: pointer;
      }

      .button-select {
        display: grid;
        grid-template-columns: 1fr 1fr;

        button {
          height: 64px;
          background: #f5f8fa;
          border: 1px solid #d3e2e5;
          color: #5c8599;
          cursor: pointer;

          /* active  */
          /* background: #EDFFF6;
  border: 1px solid #A1E9C5;
  color: #37C77F; */
        }
      }
    }

    .input-block + .input-block {
      margin-top: 24px;
    }
  }
`
